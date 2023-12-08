export const buttonData = {
    basic: [
        { id: 'times', latex: '\\times', icon: '\\[\\times\\]' },
        { id: 'plus', latex: '+', icon: '\\[+\\]' },
        { id: 'minus', latex: '-', icon: '\\[-\\]' },
        { id: 'divide', latex: '\\div', icon: '\\[\\div\\]' },
        { id: 'equals', latex: '=', icon: '\\[=\\]' },
        { id: 'neq', latex: '\\neq', icon: '\\[\\neq\\]' },
        { id: 'cdot', latex: '\\cdot', icon: '\\[\\cdot\\]' },
        { id: 'opencurly', latex: '\\{', icon: '\\[\\{\\]' },
        { id: 'closecurly', latex: '\\}', icon: '\\[\\}\\]' },
        { id: 'lt', latex: '<', icon: '\\[<\\]' },
        { id: 'gt', latex: '>', icon: '\\[>\\]' },
        { id: 'leq', latex: '\\leq', icon: '\\[\\leq\\]' },
        { id: 'geq', latex: '\\geq', icon: '\\[\\geq\\]' },
        { id: 'exp', latex: 'a^{b}', icon: '\\[a^{b}\\]' },
        { id: 'exp', latex: 'a_{b}', icon: '\\[a_{b}\\]' },
        { id: 'pm', latex: '\\pm', icon: '\\[\\pm\\]' }, // Plus-minus
        { id: 'mp', latex: '\\mp', icon: '\\[\\mp\\]' }, // Minus-plus
        { id: 'times', latex: '\\times', icon: '\\[\\times\\]' },
        { id: 'div', latex: '\\div', icon: '\\[\\div\\]' },
        { id: 'pmatrix', latex: '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}', icon: '\\[\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}\\]' }, // Matrix
        { id: 'sqrt', latex: '\\sqrt{x}', icon: '\\[\\sqrt{x}\\]' },
        { id: 'nroot', latex: '\\sqrt[n]{x}', icon: '\\[\\sqrt[n]{x}\\]' }, // nth root
        { id: 'infty', latex: '\\infty', icon: '\\[\\infty\\]' }, // Infinity
        { id: 'percent', latex: '\\%', icon: '\\[\\%\\]' }, // Percent
        { id: 'parallel', latex: '\\parallel', icon: '\\[\\parallel\\]' }, // Parallel
        { id: 'perp', latex: '\\perp', icon: '\\[\\perp\\]' }, // Perpendicular
    ],
    calculus: [
        { id: 'sum', latex: '\\sum', icon: '\\[\\sum\\]' },
        { id: 'sum_n_1_to_infty', latex: '\\sum_{n=1}^\\infty', icon: '\\[\\sum_{n=1}^\\infty\\]' }, // Sum from n=1 to infinity
        { id: 'prod', latex: '\\prod', icon: '\\[\\prod\\]' },
        { id: 'lim', latex: '\\lim', icon: '\\[\\lim\\]' },
        { id: 'partial', latex: '\\partial', icon: '\\[\\partial\\]' },
        { id: 'frac', latex: '\\frac{a}{b}', icon: '\\[\\frac{a}{b}\\]' },
        { id: 'sqrt', latex: '\\sqrt{n}', icon: '\\[\\sqrt{n}\\]' },
        { id: 'nabla', latex: '\\nabla', icon: '\\[\\nabla\\]' },
        { id: 'delta', latex: '\\Delta', icon: '\\[\\Delta\\]' },
        { id: 'dot', latex: '\\dot{x}', icon: '\\[\\dot{x}\\]' },
        { id: 'ddot', latex: '\\ddot{x}', icon: '\\[\\ddot{x}\\]' },
        { id: 'prime', latex: 'f\'(x)', icon: '\\[f\'(x)\\]' },
        { id: 'doubleprime', latex: 'f\'\'(x)', icon: '\\[f\'\'(x)\\]' },
        { id: 'int_{a}^{b}', latex: '\\int_{a}^{b}', icon: '\\[\\int_{a}^{b}\\]' },
        { id: 'infty', latex: '\\infty', icon: '\\[\\infty\\]' },
        { id: 'minus_infinity', latex: '-\\infty', icon: '\\[-\\infty\\]' }, // Minus infinity
        { id: 'lim_{x \\to \\infty}', latex: '\\lim_{x \\to \\infty}', icon: '\\[\\lim_{x \\to \\infty}\\]' },
        { id: 'lim_{x \\to a}', latex: '\\lim_{x \\to a}', icon: '\\[\\lim_{x \\to a}\\]' }, // General limit
        { id: 'lim_{x \\to a^{+}}', latex: '\\lim_{x \\to a^{+}}', icon: '\\[\\lim_{x \\to a^{+}}\\]' }, // Limit from the right
        { id: 'lim_{x \\to a^{-}}', latex: '\\lim_{x \\to a^{-}}', icon: '\\[\\lim_{x \\to a^{-}}\\]' }, // Limit from the left
        { id: 'i', latex: 'i', icon: '\\[i\\]' },
        { id: 'e', latex: 'e', icon: '\\[e\\]' },
        { id: 'int', latex: '\\int', icon: '\\[\\int\\]' },
        { id: 'oint', latex: '\\oint', icon: '\\[\\oint\\]' }, // Closed integral
        { id: 'iint', latex: '\\iint', icon: '\\[\\iint\\]' }, // Double integral
        { id: 'iiint', latex: '\\iiint', icon: '\\[\\iiint\\]' }, // Triple integral
        { id: 'idotsint', latex: '\\idotsint', icon: '\\[\\idotsint\\]' }, // Iterated integral
        { id: 'int_{a}^{b}', latex: '\\int_{a}^{b}', icon: '\\[\\int_{a}^{b}\\]' },
        { id: 'iint_{D}', latex: '\\iint_{D}', icon: '\\[\\iint_{D}\\]' }, // Double integral over a region
        { id: 'iiint_{D}', latex: '\\iiint_{D}', icon: '\\[\\iiint_{D}\\]' }, // Triple integral over a region
        { id: 'int_{-infty}^{infty}', latex: '\\int_{-\\infty}^{\\infty}', icon: '\\[\\int_{-\\infty}^{\\infty}\\]' }, // Improper integral from -infinity to infinity
        { id: 'int_{-infty}^{a}', latex: '\\int_{-\\infty}^{a}', icon: '\\[\\int_{-\\infty}^{a}\\]' }, // Improper integral from -infinity to a
        { id: 'int_{a}^{infty}', latex: '\\int_{a}^{\\infty}', icon: '\\[\\int_{a}^{\\infty}\\]' }, // Improper integral from a to infinity
    ],
    arrows: [
        { id: 'rightarrow', latex: '\\rightarrow', icon: '\\[\\rightarrow\\]' },
        { id: 'leftarrow', latex: '\\leftarrow', icon: '\\[\\leftarrow\\]' },
        { id: 'Rightarrow', latex: '\\Rightarrow', icon: '\\[\\Rightarrow\\]' },
        { id: 'Leftarrow', latex: '\\Leftarrow', icon: '\\[\\Leftarrow\\]' },
        { id: 'longleftrightarrow', latex: '\\longleftrightarrow', icon: '\\[\\longleftrightarrow\\]' },
        { id: 'Longleftrightarrow', latex: '\\Longleftrightarrow', icon: '\\[\\Longleftrightarrow\\]' },
        { id: 'uparrow', latex: '\\uparrow', icon: '\\[\\uparrow\\]' },
        { id: 'downarrow', latex: '\\downarrow', icon: '\\[\\downarrow\\]' },
        { id: 'Uparrow', latex: '\\Uparrow', icon: '\\[\\Uparrow\\]' },
        { id: 'Downarrow', latex: '\\Downarrow', icon: '\\[\\Downarrow\\]' },
        { id: 'nearrow', latex: '\\nearrow', icon: '\\[\\nearrow\\]' },
        { id: 'searrow', latex: '\\searrow', icon: '\\[\\searrow\\]' },
        { id: 'swarrow', latex: '\\swarrow', icon: '\\[\\swarrow\\]' },
        { id: 'nwarrow', latex: '\\nwarrow', icon: '\\[\\nwarrow\\]' },
        { id: 'longrightarrow', latex: '\\Longrightarrow', icon: '\\[\\Longrightarrow\\]' },
        { id: 'longleftarrow', latex: '\\Longleftarrow', icon: '\\[\\Longleftarrow\\]' },
    ],
    alphabetic: [
        { id: 'alpha', latex: '\\alpha', icon: '\\[\\alpha\\]' },
        { id: 'beta', latex: '\\beta', icon: '\\[\\beta\\]' },
        { id: 'gamma', latex: '\\gamma', icon: '\\[\\gamma\\]' },
        { id: 'delta', latex: '\\delta', icon: '\\[\\delta\\]' },
        { id: 'epsilon', latex: '\\epsilon', icon: '\\[\\epsilon\\]' },
        { id: 'zeta', latex: '\\zeta', icon: '\\[\\zeta\\]' },
        { id: 'eta', latex: '\\eta', icon: '\\[\\eta\\]' },
        { id: 'theta', latex: '\\theta', icon: '\\[\\theta\\]' },
        { id: 'iota', latex: '\\iota', icon: '\\[\\iota\\]' },
        { id: 'kappa', latex: '\\kappa', icon: '\\[\\kappa\\]' },
        { id: 'lambda', latex: '\\lambda', icon: '\\[\\lambda\\]' },
        { id: 'mu', latex: '\\mu', icon: '\\[\\mu\\]' },
        { id: 'nu', latex: '\\nu', icon: '\\[\\nu\\]' },
        { id: 'xi', latex: '\\xi', icon: '\\[\\xi\\]' },
        { id: 'omicron', latex: '\\omicron', icon: '\\[\\omicron\\]' },
        { id: 'pi', latex: '\\pi', icon: '\\[\\pi\\]' },
        { id: 'rho', latex: '\\rho', icon: '\\[\\rho\\]' },
        { id: 'sigma', latex: '\\sigma', icon: '\\[\\sigma\\]' },
        { id: 'tau', latex: '\\tau', icon: '\\[\\tau\\]' },
        { id: 'upsilon', latex: '\\upsilon', icon: '\\[\\upsilon\\]' },
        { id: 'phi', latex: '\\phi', icon: '\\[\\phi\\]' },
        { id: 'chi', latex: '\\chi', icon: '\\[\\chi\\]' },
        { id: 'psi', latex: '\\psi', icon: '\\[\\psi\\]' },
        { id: 'omega', latex: '\\omega', icon: '\\[\\omega\\]' },
    ],

    functions: [
        { id: 'sin', latex: '\\sin(x)', icon: '\\[\\sin(x)\\]' },
        { id: 'cos', latex: '\\cos(x)', icon: '\\[\\cos(x)\\]' },
        { id: 'tan', latex: '\\tan(x)', icon: '\\[\\tan(x)\\]' },
        { id: 'cot', latex: '\\cot(x)', icon: '\\[\\cot(x)\\]' },
        { id: 'sec', latex: '\\sec(x)', icon: '\\[\\sec(x)\\]' },
        { id: 'csc', latex: '\\csc(x)', icon: '\\[\\csc(x)\\]' },
        { id: 'exp', latex: 'e^{x}', icon: '\\[e^{x}\\]' }, // Exponential function
        { id: 'exp', latex: '2^{x}', icon: '\\[2^{x}\\]' },
        { id: 'ln', latex: '\\ln(x)', icon: '\\[\\ln(x)\\]' }, // Natural logarithm
        { id: 'log_{b}', latex: '\\log_{b}(x)', icon: '\\[\\log_{b}(x)\\]' }, // Logarithm with base 'b'
        { id: 'log', latex: '\\log(x)', icon: '\\[\\log(x)\\]' }, // Logarithm
        { id: 'arcsin', latex: '\\sin^{-1}(x)', icon: '\\[\\sin^{-1}(x)\\]' },
        { id: 'arccos', latex: '\\arccos^{-1}(x)', icon: '\\[\\cos^{-1}(x)\\]' },
        { id: 'arctan', latex: '\\arctan^{-1}(x)', icon: '\\[\\tan^{-1}(x)\\]' },
        { id: 'sinh', latex: '\\sinh(x)', icon: '\\[\\sinh(x)\\]' },
        { id: 'cosh', latex: '\\cosh(x)', icon: '\\[\\cosh(x)\\]' },
        { id: 'tanh', latex: '\\tanh(x)', icon: '\\[\\tanh(x)\\]' },
        { id: 'coth', latex: '\\coth(x)', icon: '\\[\\coth(x)\\]' },

    ],
    fonts: [
        { id: 'mathbf', latex: '\\mathbf{x}', icon: '\\[\\mathbf{x}\\]' }, // Bold math
        { id: 'mathit', latex: '\\mathit{x}', icon: '\\[\\mathit{x}\\]' }, // Italic math
        { id: 'mathrm', latex: '\\mathrm{x}', icon: '\\[\\mathrm{x}\\]' }, // Roman math
        { id: 'mathbb', latex: '\\mathbb{R}', icon: '\\[\\mathbb{R}\\]' }, // Blackboard bold
        { id: 'mathcal', latex: '\\mathcal{A}', icon: '\\[\\mathcal{A}\\]' }, // Calligraphic
        { id: 'mathfrak', latex: '\\mathfrak{A}', icon: '\\[\\mathfrak{A}\\]' }, // Fraktur
        { id: 'mathtt', latex: '\\mathtt{x}', icon: '\\[\\mathtt{x}\\]' }, // Typewriter
    ],
    discrete: [
        { id: 'and', latex: '\\wedge', icon: '\\[\\wedge\\]' },
        { id: 'or', latex: '\\vee', icon: '\\[\\vee\\]' },
        { id: 'equivalent', latex: '\\equiv', icon: '\\[\\equiv\\]' },
        { id: 'notequivalent', latex: '\\not\\equiv', icon: '\\[\\not\\equiv\\]' },
        { id: 'leq', latex: '\\leq', icon: '\\[\\leq\\]' },
        { id: 'notleq', latex: '\\not\\leq', icon: '\\[\\not\\leq\\]' },
        { id: 'geq', latex: '\\geq', icon: '\\[\\geq\\]' },
        { id: 'notgeq', latex: '\\not\\geq', icon: '\\[\\not\\geq\\]' },
        { id: 'universal', latex: '\\forall', icon: '\\[\\forall\\]' },
        { id: 'existential', latex: '\\exists', icon: '\\[\\exists\\]' },
        { id: 'implies', latex: '\\Rightarrow', icon: '\\[\\Rightarrow\\]' },
        { id: 'notimplies', latex: '\\not\\Rightarrow', icon: '\\[\\not\\Rightarrow\\]' },
        { id: 'not', latex: '\\neg', icon: '\\[\\neg\\]' },
        { id: 'in', latex: '\\in', icon: '\\[\\in\\]' },
        { id: 'notin', latex: '\\not\\in', icon: '\\[\\not\\in\\]' },
        { id: 'union', latex: '\\cup', icon: '\\[\\cup\\]' },
        { id: 'intersection', latex: '\\cap', icon: '\\[\\cap\\]' },
        { id: 'subset', latex: '\\subseteq', icon: '\\[\\subseteq\\]' },
        { id: 'notsubset', latex: '\\not\\subseteq', icon: '\\[\\not\\subseteq\\]' },
        { id: 'emptyset', latex: '\\emptyset', icon: '\\[\\emptyset\\]' },
    ],
    formulas: [
        { id: 'quadratic', latex: 'x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}', icon: '\\[x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}\\]' }, // Quadratic formula
        { id: 'pythagorean', latex: 'c = \\sqrt{a^2 + b^2}', icon: '\\[c = \\sqrt{a^2 + b^2}\\]' }, // Pythagorean theorem
        { id: 'slope', latex: 'm = \\frac{y_2 - y_1}{x_2 - x_1}', icon: '\\[m = \\frac{y_2 - y_1}{x_2 - x_1}\\]' }, // Slope formula
        { id: 'distance', latex: 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}', icon: '\\[d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\]' }, // Distance formula
        { id: 'area', latex: 'A = \\frac{1}{2}bh', icon: '\\[A = \\frac{1}{2}bh\\]' }, // Area of a triangle
        { id: 'volume', latex: 'V = lwh', icon: '\\[V = lwh\\]' }, // Volume of a rectangular prism
        { id: 'cosine', latex: '\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta', icon: '\\[\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta\\]' }, // Double-angle cosine identity
        { id: 'sine', latex: '\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta', icon: '\\[\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta\\]' }, // Double-angle sine identity
        { id: 'circle', latex: 'A = \\pi r^2', icon: '\\[A = \\pi r^2\\]' }, // Area of a 
        { id: 'quadratic-vertex', latex: 'y = a(x - h)^2 + k', icon: '\\[y = a(x - h)^2 + k\\]' }, // Quadratic function in vertex form
    ],

};
