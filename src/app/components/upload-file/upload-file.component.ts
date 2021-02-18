import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Byte } from '@angular/compiler/src/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UploadFile } from 'src/app/models/upload-file.model';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  @Input() fileUpload : UploadFile;

  @Output() fileUploadEvent = new EventEmitter<string | ArrayBuffer>();

  constructor() { }

  ngOnInit(): void {
    this.validateData();
  }

  private validateData(): void{
    if (!this.fileUpload) {
      this.fileUpload = {
        fileName: "",
        label: "Seleccionar archivo..."
      }
    }
  }

  public getFile(fileInput: any): void {
    
    const file = fileInput.target.files[0] as File;
    let reader = new FileReader();
    reader.onloadend = () =>{
      this.fileUploadEvent.emit(reader.result);
    }
    reader.readAsDataURL(file);
  }

}
