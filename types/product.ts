import { Engine } from "types/engine";
import { Paramotor } from "types/paramotor";
import { Propeller } from "types/propeller";
import { Seat } from "types/seat";
import { Wing } from "types/wing";

export type Product = Engine | Paramotor | Propeller | Seat | Wing;

export type TypeProduct =
  | "engine"
  | "paramotor"
  | "propeller"
  | "seat"
  | "wing";
