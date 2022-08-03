import 'express-async-errors';
import express, { Express, NextFunction, Request, Response, Router } from "express";
import { AppError } from "../../error/AppError";
import { routes } from "./routes";

const port = 3000
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)


app.use(function(err: Error | AppError, req: Request, res: Response, next: NextFunction) {
  if(err instanceof AppError){
		return res.status(err.statusCode).json({
			success: false,
			code: err.statusCode,
			error: err.error
		})
	}
});

app.listen(port, () => console.log(`Running on ${port}`) )






