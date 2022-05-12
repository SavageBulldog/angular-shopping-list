/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShoppingApiService } from './shopping-api.service';

describe('Service: ShoppingApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingApiService],
    });
  });

  it('should ...', inject(
    [ShoppingApiService],
    (service: ShoppingApiService) => {
      expect(service).toBeTruthy();
    }
  ));
});
