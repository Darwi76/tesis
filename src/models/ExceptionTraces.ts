import {Column,Entity,Index,JoinColumn,OneToOne} from "typeorm";
import {Trace} from './Trace'


@Index("exception_traces_pkey",["id",],{ unique:true })
@Entity("exception_traces" ,{schema:"public" } )
export  class ExceptionTraces {

@Column("integer",{ primary:true,name:"id" })
id:number;

@Column("character varying",{ name:"exception_type",length:255 })
exceptionType:string;

@Column("text",{ name:"message" })
message:string;

@OneToOne(()=>Trace,trace=>trace.exceptionTraces,{ onDelete:"CASCADE" })
@JoinColumn([{ name: "id", referencedColumnName: "id" },
])
  trace: Trace;
}
