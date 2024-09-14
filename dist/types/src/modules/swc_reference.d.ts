import * as swc from "@swc/core";
export declare class SwcRederence {
    /** This value defines a module of SWC. */
    AST: swc.Module;
    constructor(
    /** This value defines a module of SWC. */
    AST: swc.Module);
    /**
     * Creates an instance of this class by a given javascript source
     * parsing(convert to AST) and SWC options, and return it.
     */
    static byParse(src: string, options?: swc.ParseOptions): Promise<SwcRederence>;
}
