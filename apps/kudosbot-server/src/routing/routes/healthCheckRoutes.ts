import express, { Request, Response } from "express";
import { ApplicationContext } from "../../types";

export function initHealthcheckRoutes(
  app: express.Application,
  _context: ApplicationContext
): void {
  console.log("[INIT] Initializing health check routes");

  app.get("/", async (req: Request, res: Response) => {
    res.status(200).send("Kudosbot Server - OK!");
  });
}
