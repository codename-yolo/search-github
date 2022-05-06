const setClassName = (nameLanguage, styles) => {
  return {
    html: nameLanguage[0] === 'HTML',
    css: nameLanguage[0] === 'CSS',
    javascript: nameLanguage[0] === 'JavaScript',
    vim: nameLanguage[0] === 'Vim script',
    python: nameLanguage[0] === 'Python',
    shell: nameLanguage[0] === 'Shell',
    ruby: nameLanguage[0] === 'Ruby',
    haskell: nameLanguage[0] === 'Haskell',
    typeScript: nameLanguage[0] === 'TypeScript',
    go: nameLanguage[0] === 'Go',
    c: nameLanguage[0] === 'C',
    java: nameLanguage[0] === 'Java',
    cSharp: nameLanguage[0] === 'C#',
    php: nameLanguage[0] === 'PHP',
    m4: nameLanguage[0] === 'M4',
    lua: nameLanguage[0] === 'Lua',
    makefile: nameLanguage[0] === 'Makefile',
    cMake: nameLanguage[0] === 'CMake',
    cPlus: nameLanguage[0] === 'C++',
    objectiveC: nameLanguage[0] === 'Objective-C',
    stylus: nameLanguage[0] === 'Stylus',
    handlebars: nameLanguage[0] === 'php',
    puppet: nameLanguage[0] === 'Puppet',
    smarty: nameLanguage[0] === 'Smarty',
    gherkin: nameLanguage[0] === 'Gherkin',
    dockerFile: nameLanguage[0] === 'Dockerfile',
    coffeeScript: nameLanguage[0] === 'CoffeeScript',
    scss: nameLanguage[0] === 'SCSS',
    erLang: nameLanguage[0] === 'Erlang',
    protocolBuffererLang: nameLanguage[0] === 'Protocol Buffer',
    handleBars: nameLanguage[0] === 'Handlebars',
    xslt: nameLanguage[0] === 'XSLT',
    swift: nameLanguage[0] === 'Swift',
    cuda: nameLanguage[0] === 'Cuda',
    apex: nameLanguage[0] === 'Apex',
    yacc: nameLanguage[0] === 'Yacc',
    lex: nameLanguage[0] === 'Lex',
    perl: nameLanguage[0] === 'Perl',
    assembly: nameLanguage[0] === 'Assembly',
    emacsLisp: nameLanguage[0] === 'Emacs Lisp',
    scheme: nameLanguage[0] === 'Scheme',
    arc: nameLanguage[0] === 'Arc',
    vue: nameLanguage[0] === 'Vue',
    qMake: nameLanguage[0] === 'QMake',
    vbScript: nameLanguage[0] === 'VBScript',
    apacheConf: nameLanguage[0] === 'ApacheConf',
    hack: nameLanguage[0] === 'Hack',
    fSharp: nameLanguage[0] === 'F#',
    batchFile: nameLanguage[0] === 'Batchfile'
  }
}

export default setClassName
