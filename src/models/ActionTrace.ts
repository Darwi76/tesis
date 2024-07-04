import {Column,Entity,Index,JoinColumn,OneToOne} from "typeorm";
import {Trace} from './Trace'
import {PerformanceTrace} from './PerformanceTrace'


@Index("action_trace_pkey",["id",],{ unique:true })
@Entity("action_trace" ,{schema:"public" } )
export  class ActionTrace {

@Column("integer",{ primary:true,name:"id" })
id:number;

@Column("character varying",{ name:"reference",length:255 })
reference:string;

@Column("character varying",{ name:"controller",length:255 })
controller:string;

@Column("character varying",{ name:"action",length:255 })
action:string;

@Column("text",{ name:"uri" })
uri:string;

@Column("text",{ name:"route_parameter" })
routeParameter:string;

@Column("integer",{ name:"run" })
run:number;

@Column("integer",{ name:"fail" })
fail:number;

@Column("boolean",{ name:"is_ajax" })
isAjax:boolean;

@OneToOne(()=>Trace,trace=>trace.actionTrace,{ onDelete:"CASCADE" })
@JoinColumn([{ name: "id", referencedColumnName: "id" },
])
  dataTrace: Trace;

@OneToOne(()=>PerformanceTrace,performanceTrace=>performanceTrace.idTrace2)


performanceTrace:PerformanceTrace;

}
