export class LikeComponent{
   
    constructor(public likesCount:number, public isSelected:boolean){
    }
    onClick(){
        if(this.isSelected){
            this.likesCount--;
        }
        else{
            this.likesCount++;
        }
        this.likesCount += (this.isSelected) ? -1 : +1;
        this.isSelected = !this.isSelected;
    }
}


