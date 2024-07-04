import { Column, Entity, Index } from "typeorm";

@Index("boson_estate_sso_pkey", ["id"], { unique: true })
@Entity("boson_estate_sso", { schema: "public" })
export class BosonEstateSso {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("character varying", { name: "provider_id", length: 32 })
  providerId: string;

  @Column("character varying", { name: "auth_svc_name", length: 32 })
  authSvcName: string;

  @Column("character varying", {
    name: "session_index",
    nullable: true,
    length: 512,
    default: () => "NULL::character varying",
  })
  sessionIndex: string | null;

  @Column("character varying", { name: "name_id", length: 64 })
  nameId: string;

  @Column("character varying", { name: "name_id_format", length: 64 })
  nameIdFormat: string;

  @Column("timestamp without time zone", { name: "created_on" })
  createdOn: Date;
}
