'use strict'

var chai = require('chai')
chai.should()

var _ = require('lodash')

var React = require('react')
var ReactTestUtils = require('react-addons-test-utils')

var shallowRenderer = ReactTestUtils.createRenderer()
var BookListItem = require('./../../../../Client/Components/Books/BookListItem')

describe('the BookListItem Component', function () {
  describe('given a BookItem as a property', function () {
    let validBookDataItem = {
      _id: '9790220906466',
      title: 'Harlequin, Book 1',
      isbn13: '9790220906466',
      publisher: 'Cramer Music',
      publicationDate: 2004,
      piecesInBook: [{
        number: 1,
        piece_id: 'piece11'
      }]
    }

    describe('when rendering', function () {
      let shallowRendererOutput = {}

      before(function () {
        shallowRenderer.render(<BookListItem book={validBookDataItem}/>)
        shallowRendererOutput = shallowRenderer.getRenderOutput()
      })

      it('should create a single table row', function () {
        shallowRendererOutput.type.should.equal('tr')
      })

      it('should create a table row with four elements', function () {
        var allChildElementsAreTableElements = _.every(shallowRendererOutput.props.children, function(element) {
          return element.type === 'td'
        })
        allChildElementsAreTableElements.should.be.true
      })

      it('should set the first table element\'s content to the book\'s title', function () {
        var firstTableElement = shallowRendererOutput.props.children[0]
        firstTableElement.props.children.should.equal(validBookDataItem.title)
      })

      it('should set the second table element\'s content to the book\'s ISBN', function () {
        var firstTableElement = shallowRendererOutput.props.children[1]
        firstTableElement.props.children.should.equal(validBookDataItem.isbn13)
      })

      it('should set the third table element\'s content to the book\'s publisher', function () {
        var firstTableElement = shallowRendererOutput.props.children[2]
        firstTableElement.props.children.should.equal(validBookDataItem.publisher)
      })

      it('should set the fourth table element\'s content to the book\'s publication date', function () {
        var firstTableElement = shallowRendererOutput.props.children[3]
        firstTableElement.props.children.should.equal(validBookDataItem.publicationDate)
      })
    })
  })
})
