export interface Feedback { id:number; verbatim:string; recommendation:string; context:string|null; status:'pending'|'approved'|'rejected'; created_at:string }
