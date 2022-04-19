//ClassyName.ts

class ClassyName {
    private result: string;
    private base: string;
    static elementDelimiter = "__";
    static modifierDelimiter = "--";

    /**
     * 
     * @param baseName : a Block name 또는 a Block__ElementName.
     */
    constructor(baseName: string) {
        this.result = baseName;
        this.base = baseName;
    }

    setElementDelimiter(delimiter: string) {
        this.result = this.result.replace(new RegExp(ClassyName.elementDelimiter, "g"), delimiter);
        ClassyName.elementDelimiter = delimiter;
    }

    setModifierDelimiter(delimiter: string) {
        this.result = this.result.replace(new RegExp(ClassyName.modifierDelimiter, "g"), delimiter);
        ClassyName.modifierDelimiter = delimiter;
    }

    element(element: string): ClassyName {
        this.result += ClassyName.elementDelimiter + element;
        this.base = this.result;

        return this;
    }

    modifier(modifierName: string, modifierValue?: string): ClassyName {
        this.result += " " + this.base + ClassyName.modifierDelimiter + modifierName;
        if (modifierValue) {
            this.result += ClassyName.modifierDelimiter + modifierValue;
        }

        return this;
    }


    
    /**
     * 
     * @param modifierName 
     * @returns ClassyName 객체
     * 기   능 : ModifierName을 단독으로 지정한다.
     */
    modifierName(modifierName: string): ClassyName {

        this.result += " " + this.base + ClassyName.modifierDelimiter + modifierName;

        return this;
    }

    /**
     * 
     * @param modifierName 
     * @param modifierValue 
     * @returns ClassyName 객체
     * 기   능 : Modifier name과 key를 함께 지정한다. modifier value가 타당한 값인지 자체적으로 체크하므로 없을 수 있더라도 사용할 수 있다.
     * 
     */
    modifierWithValue(modifierName: string, modifierValue: string): ClassyName {
        if (modifierValue !== undefined) {
            this.result += " " + this.base + ClassyName.modifierDelimiter + modifierName + ClassyName.modifierDelimiter + modifierValue;
        }

        return this;
    }

    externalClassName(className: string): ClassyName {
        if (className !== undefined) {
            this.result += " " + className;
        }

        return this;
    }

    getResult(): string {
        return this.result;
    }

}

export default ClassyName;