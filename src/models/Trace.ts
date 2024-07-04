import {Column,Entity,Index,JoinColumn,ManyToOne,OneToOne} from "typeorm";
import {ActionTrace} from './ActionTrace'
import {DataTrace} from './DataTrace'
import {ExceptionTraces} from './ExceptionTraces'
import {NomenclatorTraceType} from './NomenclatorTraceType'


@Index("trace_pkey",["id",],{ unique:true })
@Index("idx_315bd5a12b821e5c",["traceType",],{  })
@Entity("trace" ,{schema:"public" } )
export  class Trace {

@Column("integer",{ primary:true,name:"id" })
id:number;

@Column("bigint",{ name:"trace_type",nullable:true })
traceType:string | null;

@Column("date",{ name:"date" })
date:string;

@Column("time without time zone",{ name:"hour" })
hour:string;

@Column("character varying",{ name:"username",length:255 })
username:string;

@Column("character varying",{ name:"ip_client",length:255 })
ipClient:string;

@Column("text",{ name:"user_agent" })
userAgent:string;

@Column("character varying",{ name:"type",length:255 })
type:string;

@OneToOne(()=>ActionTrace,actionTrace=>actionTrace.dataTrace)


actionTrace:ActionTrace;

@OneToOne(()=>DataTrace,dataTrace=>dataTrace.trace)


dataTrace:DataTrace;

@OneToOne(()=>ExceptionTraces,exceptionTraces=>exceptionTraces.trace)


exceptionTraces:ExceptionTraces;

@ManyToOne(()=>NomenclatorTraceType,nomenclatorTraceType=>nomenclatorTraceType.traces)
@JoinColumn([{ name: "trace_type", referencedColumnName: "id" },
])

traceType2:NomenclatorTraceType;

}
