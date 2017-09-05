import { Observable } from "rxjs/Rx";

let source = Observable.of(1,2,3).map( x => x++);

source.subscribe(console.log);