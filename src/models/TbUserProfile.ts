import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { XalixUser } from "./XalixUser";

@Index("idx_ba3567828bac62af", ["cityId"], {})
@Index("idx_ba356782f92f3e70", ["countryId"], {})
@Index("tb_user_profile_pkey", ["id"], { unique: true })
@Index("idx_ba356782936305bb", ["nodeAt"], {})
@Index("uniq_ba356782a76ed395", ["userId"], { unique: true })
@Entity("tb_user_profile", { schema: "public" })
export class TbUserProfile {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("bigint", { name: "country_id", nullable: true })
  countryId: string | null;

  @Column("bigint", { name: "city_id", nullable: true })
  cityId: string | null;

  @Column("bigint", { name: "user_id", nullable: true })
  userId: string | null;

  @Column("bigint", { name: "node_at" })
  nodeAt: string;

  @Column("date", { name: "birth_date", nullable: true })
  birthDate: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("character varying", {
    name: "photo",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  photo: string | null;

  @Column("boolean", {
    name: "termsuse",
    nullable: true,
    default: () => "true",
  })
  termsuse: boolean | null;

  @Column("character varying", { name: "gender", length: 255 })
  gender: string;

  @Column("character varying", {
    name: "academiclevel",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  academiclevel: string | null;

  @Column("text", { name: "sidebar_config", nullable: true })
  sidebarConfig: string | null;

  @Column("timestamp without time zone", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @Column("timestamp without time zone", {
    name: "deleted_at",
    nullable: true,
    default: () => "NULL::timestamp without time zone",
  })
  deletedAt: Date | null;

  @OneToOne(() => XalixUser, (xalixUser) => xalixUser.tbUserProfile)
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: XalixUser;
}
