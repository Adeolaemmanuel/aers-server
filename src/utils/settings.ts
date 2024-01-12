let {
	REFRESH_TOKEN_LENGTH,
	DEFAULT_RANDOM,
	DB_USERNAME,
	DB_NAME,
	DB_HOST,
	DB_PORT,
	DB_PASSWORD,
	DB_URL,
	PORT,
} = process.env;

DB_NAME = DB_NAME || "postgres";
DB_HOST = DB_HOST || "localhost";
DB_USERNAME = DB_USERNAME || "postgres";
DB_PASSWORD = DB_PASSWORD || "neutron@360";
DB_PORT = DB_PORT || "5432";
PORT = PORT || "4000";
DB_URL =
	DB_URL ||
	"postgresql://Adeolaemmanuel:5n0vqjxGgyVQ@ep-long-cloud-a5e8xrjk.us-east-2.aws.neon.tech/aers_dev?sslmode=require";

export {
	REFRESH_TOKEN_LENGTH,
	DEFAULT_RANDOM,
	DB_USERNAME,
	DB_NAME,
	DB_HOST,
	DB_PORT,
	DB_PASSWORD,
	DB_URL,
	PORT,
};
