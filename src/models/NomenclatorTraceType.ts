import { Column, Entity, Index, OneToMany } from "typeorm";
import { Trace } from "./Trace";

@Index("nomenclator_trace_type_pkey", ["id"], { unique: true })
@Entity("nomenclator_trace_type", { schema: "public" })
export class NomenclatorTraceType {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("character varying", { name: "trace_type", length: 255 })
  traceType: string;

  @OneToMany(() => Trace, (trace) => trace.traceType2)
  traces: Trace[];
}
