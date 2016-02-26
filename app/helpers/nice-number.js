import Ember from 'ember';

export function niceNumber(params/*, hash*/) {
  //debugger;
  if(!params) {
    return '';
  }
  const [num] = params;
  if(parseInt(num,10) > 1000) {
    //debugger;
    return `${Math.round(num * 0.01) / 10}K`;
  }else{
    return `${num}`
  }
  return params;
}

export default Ember.Helper.helper(niceNumber);
