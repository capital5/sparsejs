/**
 * Flattens deeply-nested objects into sparse objects.
 * @param {Object} o - the object to sparse
 * @param {String} k - the key name
 * @returns {Object}
 */
function sparse(o, k) {

    "use strict";

    var so = {},
        v;
    k = k === undefined ? '' : k + '.';
    for (var p in o) {
        if (o.hasOwnProperty(p)) {
            v = o[p];
            if (v !== null && v !== undefined && v.constructor === Object) {
                _.merge(so, sparse(v, k + p));
            } else {
                so[k + p] = v;
            }
        }
    }
    return so;
}