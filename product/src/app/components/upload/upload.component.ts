import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [ReactiveFormsModule], 
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'] 
})
export class UploadComponent implements OnInit {
  imageForm: FormGroup;
  image: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.imageForm = this.fb.group({
      file: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.image = reader.result; 
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.imageForm.valid) {
      
    }
  }
}