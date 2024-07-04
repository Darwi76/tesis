import { Column, Entity, Index } from "typeorm";

@Index("configfile_pkey", ["id"], { unique: true })
@Entity("configfile", { schema: "public" })
export class Configfile {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "enginename", length: 255 })
  enginename: string;

  @Column("character varying", { name: "classjdbcdriver", length: 255 })
  classjdbcdriver: string;

  @Column("character varying", { name: "iddbcurlconnect", length: 255 })
  iddbcurlconnect: string;

  @Column("character varying", { name: "dbuser", length: 255 })
  dbuser: string;

  @Column("character varying", { name: "dbpassword", length: 255 })
  dbpassword: string;

  @Column("character varying", { name: "registrattionurl", length: 255 })
  registrattionurl: string;

  @Column("character varying", { name: "syncurl", length: 255 })
  syncurl: string;

  @Column("character varying", { name: "groupid", length: 255 })
  groupid: string;

  @Column("character varying", { name: "registergroupid", length: 255 })
  registergroupid: string;

  @Column("character varying", { name: "externalid", length: 255 })
  externalid: string;

  @Column("character varying", { name: "jobpurgeperiodtime", length: 255 })
  jobpurgeperiodtime: string;

  @Column("integer", { name: "jobroutingperiodtime" })
  jobroutingperiodtime: number;

  @Column("integer", { name: "jobpullperiodtime" })
  jobpullperiodtime: number;

  @Column("integer", { name: "jobpushperiodtime" })
  jobpushperiodtime: number;

  @Column("boolean", { name: "initialloadcreatefirst" })
  initialloadcreatefirst: boolean;
}
