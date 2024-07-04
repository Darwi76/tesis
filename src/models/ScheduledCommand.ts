import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("scheduled_command_pkey", ["idScheduledCommand"], { unique: true })
@Entity("scheduled_command", { schema: "public" })
export class ScheduledCommand {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_scheduled_command" })
  idScheduledCommand: number;

  @Column("character varying", { name: "name", length: 100 })
  name: string;

  @Column("character varying", { name: "command", length: 100 })
  command: string;

  @Column("character varying", {
    name: "arguments",
    nullable: true,
    length: 250,
    default: () => "NULL::character varying",
  })
  arguments: string | null;

  @Column("character varying", {
    name: "cron_expression",
    nullable: true,
    length: 100,
    default: () => "NULL::character varying",
  })
  cronExpression: string | null;

  @Column("timestamp without time zone", { name: "dh_last_execution" })
  dhLastExecution: Date;

  @Column("integer", { name: "last_return_code", nullable: true })
  lastReturnCode: number | null;

  @Column("character varying", {
    name: "log_file",
    nullable: true,
    length: 100,
    default: () => "NULL::character varying",
  })
  logFile: string | null;

  @Column("integer", { name: "priority" })
  priority: number;

  @Column("boolean", { name: "b_execute_immediately" })
  bExecuteImmediately: boolean;

  @Column("boolean", { name: "b_disabled" })
  bDisabled: boolean;

  @Column("boolean", { name: "b_locked" })
  bLocked: boolean;
}
