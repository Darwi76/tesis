import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { ActionTrace } from "./ActionTrace";

@Index("performance_trace_pkey", ["idTrace"], { unique: true })
@Entity("performance_trace", { schema: "public" })
export class PerformanceTrace {
  @Column("integer", { primary: true, name: "id_trace" })
  idTrace: number;

  @Column("double precision", { name: "time", precision: 53 })
  time: number;

  @Column("double precision", { name: "memory", precision: 53 })
  memory: number;

  @OneToOne(() => ActionTrace, (actionTrace) => actionTrace.performanceTrace)
  @JoinColumn([{ name: "id_trace", referencedColumnName: "id" }])
  idTrace2: ActionTrace;
}
