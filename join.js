/**
 * $join
 * 
 * Junta todos os elementos do array em um literal de caracteres
 * a funcao curry
 * 
 * @module @join
 * @author Cleber de Moraes Gonçalves <cleber.programmer>
 * @example
 * 
 *        $join(['hello', 'cleber.programmer'], ' ');
 * 
 */
this.Ninja.module('$join', ['$curry'], function ($curry) {
  
  /**
   * Jounta todos os elementos do array em uma literal
   * de string
   * 
   * @public
   * @method join
   * @param {Array} a Colecao de elementos
   * @param {String} b Separador do elementos do array
   * @return {String} Literal de caracteres
   * @example
   * 
   *        $join(['hello', 'cleber.programmer'], ' ');
   * 
   */
  function join(a, b) {
    return a.join(b);
  }
  
  /**
   * Revelacao do servico $join, encapsulando a visibilidade das funcoes
   * privadas
   */
  return $curry(join);
  
});
