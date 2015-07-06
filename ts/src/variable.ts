/*-----------------------------------------------------------------------------
| Copyright (c) 2014, Nucleic Development Team.
|
| Distributed under the terms of the Modified BSD License.
|
| The full license is in the file COPYING.txt, distributed with this software.
|----------------------------------------------------------------------------*/
module kiwi
{

    /**
     * The primary user constraint variable.
     *
     * @class
     */
    export
    class Variable
    {
        /**
         * Construct a new Variable
         *
         * @param [name] The name to associated with the variable.
         */
        constructor( name: string = "" )
        {
            this._name = name;
        }

        /**
         * Returns the unique id number of the variable.
         */
        id(): number
        {
            return this._id;
        }

        /**
         * Returns the name of the variable.
         */
        name(): string
        {
            return this._name;
        }

        /**
         * Set the name of the variable.
         */
        setName( name: string ): void
        {
            this._name = name;
        }

        /**
         * Returns the user context object of the variable.
         */
        context(): any
        {
            return this._context;
        }

        /**
         * Set the user context object of the variable.
         */
        setContext( context: any ): void
        {
            this._context = context;
        }

        /**
         * Returns the value of the variable.
         */
        value(): number
        {
            return this._value;
        }

        /**
         * Set the value of the variable.
         */
        setValue( value: number ): void
        {
            this._value = value;
        }

        /**
         * Returns the JSON representation of the variable.
         */
        toJSON(): any
        {
            return {
                name: this._name,
                value: this._value
            };
        }

        private _name: string;
        private _value: number = 0.0;
        private _context: any = null;
        private _id: number = VarId++;
    }


    /**
     * The internal variable id counter.
     */
    var VarId = 0;

}
