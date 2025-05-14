// Hook de Formulário Multistep
import { useState } from "react";

export function useForm(steps){
    const [currentStep, setCurrentStep] = useState(0);
    
    function changeStep(i, e){                              // Muda o passo atual
        e.preventDefault();
        if (i < 0 || i >= steps.length){return;}

        setCurrentStep(i);
    }

    function isFirstStep() {                                // Verifica se é o primeiro passo
        if (currentStep === 0){ return true; }
        else { return false; }
    }

    function isLastStep() {                                 // Verifica se é o último passo
        if (currentStep + 1 === steps.length){ return true; }
        else { return false; }
    }

    return {currentStep, currentComponent: steps[currentStep], changeStep, isFirstStep, isLastStep};
}