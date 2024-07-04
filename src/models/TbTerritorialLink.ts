import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TbCes } from './TbCes';
import { TbProvince } from './TbProvince';

@Index('idx_85118ffab58cda09', ['careerId'], {})
@Index('idx_85118ffa8efa373a', ['cesId'], {})
@Index('tb_territorial_link_pkey', ['id'], { unique: true })
@Index('idx_85118ffa2d6d889b', ['modalityId'], {})
@Index('idx_85118ffa936305bb', ['nodeAt'], {})
@Index('idx_85118ffae946114a', ['provinceId'], {})
@Index('idx_85118ffa7805653', ['schoolYearAt'], {})
@Entity('tb_territorial_link')
export class TbTerritorialLink {
  @Column('bigint', { primary: true, name: 'id' })
  id: string;

  @Column('bigint', { name: 'province_id', nullable: true })
  provinceId: string | null;

  @Column('bigint', { name: 'career_id', nullable: true })
  careerId: string | null;

  @Column('bigint', { name: 'ces_id', nullable: true })
  cesId: string | null;

  @Column('bigint', { name: 'modality_id', nullable: true })
  modalityId: string | null;

  @Column('bigint', { name: 'node_at' })
  nodeAt: string;

  @Column('bigint', { name: 'school_year_at' })
  schoolYearAt: string;

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

  @ManyToOne(() => TbCes, (tbCes) => tbCes.tbTerritorialLinks)
  @JoinColumn([{ name: 'ces_id', referencedColumnName: 'id' }])
  ces: TbCes;

  @ManyToOne(() => TbProvince, (tbProvince) => tbProvince.tbTerritorialLinks)
  @JoinColumn([{ name: 'province_id', referencedColumnName: 'id' }])
  province: TbProvince;
}
