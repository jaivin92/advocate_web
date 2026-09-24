import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ChangeBranchReqModel, LoginModel, UserModel } from 'app/models/user.model';
import { Observable } from 'rxjs';
import { DataTableRequestModel } from 'app/models/dataTableRequest.model';
import { IResponse } from 'app/models/response.model';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  Login(user: LoginModel): Observable<IResponse<any>> {
    return this.http.post<IResponse<any>>(`${this.apiBaseUrl}User/Login`, user);
  }

  Insert(user: UserModel): Observable<IResponse<any>> {
    return this.http.post<IResponse<any>>(`${this.apiBaseUrl}User/Insert`, user);
  }

  Update(user: UserModel): Observable<IResponse<any>> {
    return this.http.put<IResponse<any>>(`${this.apiBaseUrl}User/Update`, user);
  }

  GetAll(dataTableRequestModel: DataTableRequestModel): Observable<IResponse<UserModel[]>> {
    return this.http.post<IResponse<UserModel[]>>(`${this.apiBaseUrl}User/GetAll`, dataTableRequestModel);
  }

  GetById(id: any): Observable<IResponse<UserModel>> {
    return this.http.get<IResponse<UserModel>>(`${this.apiBaseUrl}User/GetById/${id.toString()}`);
  }

  ChangeBranch(changeBranchReqModel: ChangeBranchReqModel): Observable<IResponse<any>> {
    return this.http.post<IResponse<any>>(`${this.apiBaseUrl}User/ChangeBranch`, changeBranchReqModel);
  }

  RefreshToken(): Observable<IResponse<any>> {
    return this.http.get<IResponse<any>>(`${this.apiBaseUrl}User/RefreshToken`);
  }
}
