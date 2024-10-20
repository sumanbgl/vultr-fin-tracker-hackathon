import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Customer } from '../../api/customer';
import { CustomerService } from '../../service/customer.service';

@Component({
    templateUrl: './assets.component.html'
})
export class AssetsComponent implements OnInit {

    bankStatements: any[] = [{
        fileName: ''
    }];

    selectedIndex: number = 0;

    assetsLists: any[] = [];

    @ViewChild('fileSelector') fileSelector; 
    
    constructor(private customerService: CustomerService) { }

    ngOnInit() {

        this.assetsLists = [{
            id: "AWQDM8223",
            Name: "AXIS BANK",
            prevBal: "Rs. 50000",
            currentBal: "Rs. 70000",
            publishedOn: "22-OCT-2024",
            status: "Active"
        },{
            id: "AWQDM8223",
            Name: "HDFC BANK",
            prevBal: "Rs. 22000",
            currentBal: "Rs. 56000",
            publishedOn: "01-OCT-2024",
            status: "Active"
        },{
            id: "SWSCF223",
            Name: "RBL BANK",
            prevBal: "Rs. 3325502",
            currentBal: "Rs. 4551221",
            publishedOn: "11-OCT-2024",
            status: "Active"
        },{
            id: "SDDCSQ2335",
            Name: "HDFC BANK",
            prevBal: "Rs. 50000",
            currentBal: "Rs. 70000",
            publishedOn: "22-OCT-2024",
            status: "Active"
        },{
            id: "CDDD256323",
            Name: "ICICI Bank",
            prevBal: "Rs. 50000",
            currentBal: "Rs. 70000",
            publishedOn: "22-OCT-2024",
            status: "Active"
        },
    ];
    }

    addMore(){
        this.bankStatements.push({
            fileName: ''
        });
    }

    remove(i: any){
        this.bankStatements.splice(i,1);
    }

    selectFile(i: any){
        this.fileSelector.nativeElement.click();
        this.selectedIndex=i;
    }

    onBrowseFile(event: any){
        const element = event.currentTarget as HTMLInputElement;
        let fileList: FileList | null = element.files;
        if (fileList) {
            this.bankStatements[this.selectedIndex].fileName = fileList[0].name;
        }
        this.fileSelector.nativeElement.value='';
    }
    
}
