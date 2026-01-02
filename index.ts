import { Snowflake } from "@theinternetfolks/snowflake";
import { Snowflake as ns } from "@sapphire/snowflake";
import assert from "node:assert";

const sf = new ns(new Date())

const ids = Array.from({ length: 2 }, () => Snowflake.generate());
const nsIds = Array.from({ length: 2 }, () => sf.generate());

console.log("Generated id " + ids.join(", "));
console.log("Generated ns id " + nsIds.join(", "));

const parsed = sf.decode(nsIds[1]!)

const { timestamp, workerId, processId, increment, epoch, id } = parsed;

console.log(`Parsed id ${ids[0]}:
  - timestamp: ${timestamp.toString()}
  - workerId: ${workerId}
  - processId: ${processId}
  - increment: ${increment}
  - epoch: ${epoch.toString()}
  - id: ${id}
`);