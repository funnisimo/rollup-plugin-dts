declare type Props = Record<string, number>;
declare class System<T extends Props> {
    _obj: T;
    constructor(src: T);
}
type a_d_Props = Props;
type a_d_System<_0 extends Props> = System<_0>;
declare const a_d_System: typeof System;
declare namespace a_d {
  export {
    a_d_Props as Props,
    a_d_System as System,
  };
}
export { a_d as A };
