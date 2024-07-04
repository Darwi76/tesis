
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { XalixUser } from './XalixUser';

@Index('idx_c52efc4ff54384de', ['commissionAt'], {})
@Index('tb_export_models_pkey', ['id'], { unique: true })
@Index('idx_c52efc4f936305bb', ['nodeAt'], {})
@Index('idx_c52efc4f7805653', ['schoolYearAt'], {})
@Index('idx_c52efc4fa76ed395', ['userId'], {})
@Entity('tb_export_models', { schema: 'public' })
export class TbExportModels {
  @Column('bigint', { primary: true, name: 'id' })
  id: string;

  @Column('bigint', { name: 'user_id', nullable: true })
  userId: string | null;

  @Column('bigint', { name: 'node_at' })
  nodeAt: string;

  @Column('bigint', { name: 'school_year_at' })
  schoolYearAt: string;

  @Column('bigint', { name: 'commission_at' })
  commissionAt: string;

  @Column('character varying', {
    name: 'name',
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
  })
  name: string | null;

  @Column('character varying', { name: 'service_import_models', length: 255 })
  serviceImportModels: string;

  @Column('character varying', {
    name: 'service_import_models_name',
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
  })
  serviceImportModelsName: string | null;

  @Column('text', { name: 'description' })
  description: string;

  @Column('character varying', { name: 'model', length: 500 })
  model: string;

  @Column('text', { name: 'content_file', nullable: true })
  contentFile: string | null;

  @Column('timestamp without time zone', { name: 'created_at' })
  createdAt: Date;

  @Column('timestamp without time zone', { name: 'updated_at' })
  updatedAt: Date;

  @Column('timestamp without time zone', {
    name: 'deleted_at',
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
  })
  deletedAt: Date | null;

  @ManyToOne(() => XalixUser, (xalixUser) => xalixUser.tbExportModels)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: XalixUser;
}
