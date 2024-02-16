/* Copyright © 2021 Exact Realty Limited. All rights reserved.
 *
 * Permission to use, copy, modify, and distribute this software for any purpose
 * with or without fee is hereby granted, provided that the above copyright
 * notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

/** Generation script
 * @internal
 * @param {HTMLTableSectionElement} tableTbody
 * @returns {string[]}
 */
const extractData = (tableTbody) => {
	/**
	 *
	 * @param {Element} e
	 * @returns {string}
	 */
	const text = (e) => {
		return (e.textContent ?? '').trim().normalize();
	};

	return Array.from(tableTbody.querySelectorAll('tr'))
		.filter(function (a) {
			return (
				a.children.length >= 7 &&
				!text(a.children[0]).includes('Unassigned') &&
				/^-?\d+$/.test(text(a.children[1])) &&
				Number.isFinite(+text(a.children[1]))
			);
		})
		.map(function (a) {
			return (
				'/**\n * @description ' +
				(text(a.children[2]) ||
					text(a.children[0]) ||
					'(no description)') +
				'\n * Capabilities: ' +
				(text(a.children[3]) || '-') +
				'\n * Change Controller: ' +
				(text(a.children[4]) || '-') +
				'\n * Recommended: ' +
				text(a.children[6]) +
				'\n' +
				Array.from(a.querySelectorAll('a'))
					.map(function (b) {
						return (
							' * @see: {@link ' + b.href + '|' + text(b) + '}\n'
						);
					})
					.join('') +
				' * @const @type {number}' +
				(['yes', 'recommended'].includes(
					text(a.children[6]).toLowerCase(),
				)
					? ''
					: ' @deprecated') +
				'\n' +
				' */\nexport const ' +
				text(a.children[0])
					.replace(/-/g, '_')
					.replace(/\s/g, '')
					.replace(/\+/g, '_and_')
					.replace(/\//g, '_s_') +
				' = ' +
				Number(text(a.children[1])) +
				';\r\n'
			);
		});
};

if (typeof document === 'undefined') {
	throw new Error('You must run this in a browser context');
}

// eslint-disable-next-line no-undef
const els = document
	.getElementById('table-algorithms')
	?.querySelectorAll('tbody');
if (!els) {
	throw new Error("Can't proceed");
}
const result = Array.from(els).flatMap((b) => extractData(b));
result.unshift('/* eslint-disable */\r\n');
result.unshift(
	'// File generated automatically from data from:\r\n' +
		'// <https://www.iana.org/assignments/cose/cose.xhtml#algorithms>\r\n',
);
result.join('\r\n');
