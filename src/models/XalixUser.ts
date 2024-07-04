import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TbUserProfile } from './TbUserProfile';
import { XalixRolUsuario } from './XalixRolUsuario';
import { BosonAutenticationSource } from './BosonAutenticationSource';
import { TbExportModels } from './TbExportModels';
import { TbImportModels } from './TbImportModels';

@Index('uniq_25835adca0d96fbf', ['emailCanonical'], { unique: true })
@Index('idx_25835adcab082485', ['fuenteAutenticacionId'], {})
@Index('xalix_user_pkey', ['id'], { unique: true })
@Index('idx_25835adc936305bb', ['nodeAt'], {})
@Index('uniq_25835adc92fc23a8', ['usernameCanonical'], { unique: true })
@Entity('xalix_user', { schema: 'public' })
export class XalixUser {
  @Column('bigint', { primary: true, name: 'id' })
  id: string;

  @Column('bigint', { name: 'node_at' })
  nodeAt: string;

  @Column('bigint', { name: 'fuente_autenticacion_id', nullable: true })
  fuenteAutenticacionId: string | null;

  @Column('character varying', { name: 'username', length: 255 })
  username: string;

  @Column('character varying', { name: 'username_canonical', length: 255 })
  usernameCanonical: string;

  @Column('character varying', { name: 'email', length: 255 })
  email: string;

  @Column('character varying', { name: 'email_canonical', length: 255 })
  emailCanonical: string;

  @Column('boolean', { name: 'enabled' })
  enabled: boolean;

  @Column('character varying', { name: 'salt', length: 255 })
  salt: string;

  @Column('character varying', { name: 'password', length: 255 })
  password: string;

  @Column('timestamp without time zone', {
    name: 'last_login',
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
  })
  lastLogin: Date | null;

  @Column('boolean', { name: 'locked' })
  locked: boolean;

  @Column('boolean', { name: 'expired' })
  expired: boolean;

  @Column('timestamp without time zone', {
    name: 'expires_at',
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
  })
  expiresAt: Date | null;

  @Column('character varying', {
    name: 'confirmation_token',
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
  })
  confirmationToken: string | null;

  @Column('timestamp without time zone', {
    name: 'password_requested_at',
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
  })
  passwordRequestedAt: Date | null;

  @Column('text', { name: 'roles' })
  roles: string;

  @Column('boolean', { name: 'credentials_expired' })
  credentialsExpired: boolean;

  @Column('timestamp without time zone', {
    name: 'credentials_expire_at',
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
  })
  credentialsExpireAt: Date | null;

  @Column('character varying', { name: 'names', length: 255 })
  names: string;

  @Column('character varying', { name: 'last_name', length: 255 })
  lastName: string;

  @Column('character varying', { name: 'ci', length: 11 })
  ci: string;

  @Column('character varying', {
    name: 'github_id',
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
  })
  githubId: string | null;

  @Column('text', { name: 'htpasswd', nullable: true })
  htpasswd: string | null;

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

  @Column('bigint', { name: 'dominio_id', nullable: true })
  dominioId: string | null;

  @OneToOne(() => TbUserProfile, (tbUserProfile) => tbUserProfile.user, {
    cascade: true,
  })
  tbUserProfile: TbUserProfile;

  @OneToMany(
    () => XalixRolUsuario,
    (xalixRolUsuario) => xalixRolUsuario.usuario,
    {
      cascade: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  xalixRolUsuarios: XalixRolUsuario[];

  @ManyToOne(
    () => BosonAutenticationSource,
    (bosonAutenticationSource) => bosonAutenticationSource.xalixUsers,
  )
  @JoinColumn([{ name: 'fuente_autenticacion_id', referencedColumnName: 'id' }])
  fuenteAutenticacion: BosonAutenticationSource;

  @OneToMany(() => TbExportModels, (tbExportModels) => tbExportModels.user, {
    cascade: true,
  })
  tbExportModels: XalixUser[];

  @OneToMany(() => TbImportModels, (tbImportModels) => tbImportModels.user, {
    cascade: true,
  })
  tbImportModels: XalixUser[];
}
