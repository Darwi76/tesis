import {Column,Entity,Index,JoinColumn,OneToOne} from "typeorm";
import {Trace} from './Trace'


@Index("data_trace_pkey",["id",],{ unique:true })
@Entity("data_trace" ,{schema:"public" } )
export  class DataTrace {

@Column("integer",{ primary:true,name:"id" })
id:number;

@Column("character varying",{ name:"data_table",length:255 })
dataTable:string;

@Column("character varying",{ name:"data_action",length:255 })
dataAction:string;

@Column("text",{ name:"data" })
data:string;

@OneToOne(()=>Trace,trace=>trace.dataTrace,{ onDelete:"CASCADE" })
@JoinColumn([{ name: "id", referencedColumnName: "id" },
])
  trace: Trace;
}
