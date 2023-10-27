import { assertEquals } from "https://deno.land/std@0.201.0/assert/mod.ts";
import { transform } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(transform(296351, 5), 193648);
  assertEquals(transform(762184, 3), 873173);
  assertEquals(transform(45873216, 7), 95322341);
  assertEquals(transform(19750418, 6), 86727361);
  assertEquals(transform(386257914, 5), 831752441);
});
