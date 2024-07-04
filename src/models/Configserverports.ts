import { Column, Entity, Index } from "typeorm";

@Index("configserverports_pkey", ["id"], { unique: true })
@Entity("configserverports", { schema: "public" })
export class Configserverports {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "host_bind_name", length: 255 })
  hostBindName: string;

  @Column("boolean", { name: "httpenable" })
  httpenable: boolean;

  @Column("integer", { name: "httpport" })
  httpport: number;

  @Column("boolean", { name: "httpsenable" })
  httpsenable: boolean;

  @Column("integer", { name: "httpsport" })
  httpsport: number;

  @Column("boolean", { name: "httpsallowselfsignedcerts" })
  httpsallowselfsignedcerts: boolean;

  @Column("character varying", {
    name: "httpsverifiedservernames",
    length: 255,
  })
  httpsverifiedservernames: string;

  @Column("boolean", { name: "jmxhttpenable" })
  jmxhttpenable: boolean;

  @Column("integer", { name: "jmxhttpport" })
  jmxhttpport: number;
}
