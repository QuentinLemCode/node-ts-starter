import { Snowflake } from "@theinternetfolks/snowflake";

const ids = Array.from({ length: 10 }, () => Snowflake.generate());

console.log("Generated id " + ids.join(", "));

const parseds = ids.map((id) => Snowflake.parse(id));

console.log("Parsed ids: " + parseds.map((parsed) => parsed.shard_id).join(", "));