import * as swc from "@swc/core";

export class SwcRederence {
    constructor(
        /** This value defines a module of SWC. */
        public AST: swc.Module
    ) {}

    /**
     * Creates an instance of this class by a given javascript source
     * parsing(convert to AST) and SWC options, and return it.
     */
    static async byParse(src: string, options?: swc.ParseOptions): Promise<SwcRederence> {
        const AST = await swc.parse(src, options);

        // Create an instance of this class by a created AST of SWC.
        return new SwcRederence(AST);
    }
}