import { Entity } from "./types";

export abstract class Repository<T> {
  private idCounter: number;
  private list: (T & Entity)[] = [];

  constructor() {
    this.idCounter = 0;
  }

  private getNextId = (): number => {
    return ++this.idCounter;
  };

  public getAll = (): (T & Entity)[] => {
    return this.list;
  };

  public getOne = (id: number): (T & Entity) | undefined => {
    const object = this.list.find((object: T & Entity) => object.id === id);
    return object;
  };

  public addOne = (object: T): T[] => {
    const id = this.getNextId();
    this.list = [...this.list, { ...object, id }];
    return this.list;
  };

  public deleteOne = (id: number) => {
    this.list = this.list.filter((object) => object.id !== id);
  };

  public updateOne = (id: number, object: T) => {
    const index = this.list.findIndex((object) => object.id === id);
    this.list[index] = { ...object, id };
  };
}
