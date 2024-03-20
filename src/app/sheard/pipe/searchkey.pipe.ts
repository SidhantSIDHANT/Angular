import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'filter'
})
export class FilterPipe implements PipeTransform{
    transform(value: any, key : string){
        console.log((value));

        if(key){
            return value.filter((element : any)=>{
                return element.name.common.toLowerCase().includes(key.toLowerCase())
            })
        }else{
            return value   
        }
    }
}