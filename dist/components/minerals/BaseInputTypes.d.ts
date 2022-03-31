import React from 'react';
interface BaseInputTypes {
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLInputElement | HTMLTextAreaElement | HTMLDivElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}
export type { BaseInputTypes };
//# sourceMappingURL=BaseInputTypes.d.ts.map