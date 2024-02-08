import express from "express";
import "reflect-metadata";
import cors from "cors";
import userRouterV1 from "./modules/user";
import { dataSource } from "./db/db";
import { PORT } from "./utils/settings";
import systemRouterV1 from "./modules/system";
import questionV1 from "./modules/questions";
import { v4 } from "uuid";

const app = express();
const port = parseInt(PORT!) || 4000;

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
	res.setHeader("Content-Type", "text/html");
	res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
	res.end(`Hello! aers server running ${v4()}`);
});

app.use("/api/v1/users", userRouterV1);
app.use("/api/v1/system", systemRouterV1);
app.use("/api/v1/questions", questionV1);

app.listen(port, async () => {
	const db = await dataSource.initialize();
	if (db.isInitialized) {
		console.log(`Connected to the database 🚀`);
		console.log(`Server running on http://localhost:${port} 🚀`);
	} else {
		console.log(`Error connecting to database 🚫`);
	}
});

export default app;
