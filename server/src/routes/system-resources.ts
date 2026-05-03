import os from "node:os";
import { Router, type Request } from "express";
import { count, inArray } from "drizzle-orm";
import type { Db } from "@paperclipai/db";
import { heartbeatRuns } from "@paperclipai/db";
import { forbidden } from "../errors.js";

export function systemResourcesRoutes(db: Db) {
  const router = Router();

  router.get("/instance/system-resources", async (req: Request, res) => {
    if (req.actor.type !== "board") {
      throw forbidden("Board access required");
    }
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const cpuUsage = os.loadavg();

    const activeRuns = await db
      .select({
        companyId: heartbeatRuns.companyId,
        status: heartbeatRuns.status,
        count: count(),
      })
      .from(heartbeatRuns)
      .where(inArray(heartbeatRuns.status, ["queued", "running"]))
      .groupBy(heartbeatRuns.companyId, heartbeatRuns.status);

    const companyRunCounts: Record<string, { running: number; queued: number }> = {};
    let totalRunning = 0;
    let totalQueued = 0;

    for (const row of activeRuns) {
      if (!companyRunCounts[row.companyId]) {
        companyRunCounts[row.companyId] = { running: 0, queued: 0 };
      }
      const n = Number(row.count ?? 0);
      if (row.status === "running") {
        companyRunCounts[row.companyId].running += n;
        totalRunning += n;
      } else {
        companyRunCounts[row.companyId].queued += n;
        totalQueued += n;
      }
    }

    res.json({
      memory: {
        totalMb: Math.round(totalMem / 1024 / 1024),
        usedMb: Math.round(usedMem / 1024 / 1024),
        freeMb: Math.round(freeMem / 1024 / 1024),
        freePercent: Math.round((freeMem / totalMem) * 100),
      },
      cpu: {
        loadAvg1m: cpuUsage[0],
        loadAvg5m: cpuUsage[1],
        loadAvg15m: cpuUsage[2],
        cores: os.cpus().length,
      },
      runs: {
        totalRunning,
        totalQueued,
        companyBreakdown: companyRunCounts,
      },
    });
  });

  return router;
}
