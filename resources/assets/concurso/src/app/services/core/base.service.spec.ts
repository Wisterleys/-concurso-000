import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BaseService } from './base.service';

describe('BaseService', () => {
  let injector: Injector;
  let httpMock: HttpTestingController;
  let service: BaseService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BaseService],
    });
    injector = TestBed.inject(Injector);
    httpMock = TestBed.inject(HttpTestingController);
    service = new BaseService(injector);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should send GET request to server', () => {
    const testData = { data: 'test data' };
    const endpoint = '/api/v1/pessoa_fisica';
    service.get(endpoint).subscribe((result) => {
      expect(result).toEqual(testData);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}${endpoint}`);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
  });
});
