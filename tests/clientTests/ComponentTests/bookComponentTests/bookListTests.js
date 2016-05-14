'use strict'

var chai = require('chai')
chai.should()

var sinon = require('sinon')
var sandbox = sinon.sandbox.create()

var React = require('react')
var ReactTestUtils = require('react-addons-test-utils')

var shallowRenderer = ReactTestUtils.createRenderer()
var BookListItem = require('./../../../../Client/Components/Books/BookList')

describe('the BookList Component', function () {
  describe('given a valid list of books in the state', function () {
    let validBooList = [{'_id':'9781848494923','title':'Flute Exam Pieces, Grade 1 (2014-2017)','isbn10':'1848494920','isbn13':'9781848494923','publisher':'Associated Board of the Royal Schools of Music, United Kingdom','publicationDate':2013,'piecesInBook':[{'number':1,'piece_id':'piece1'},{'number':2,'piece_id':'piece2'},{'number':3,'piece_id':'piece3'},{'number':4,'piece_id':'piece4'},{'number':5,'piece_id':'piece5'},{'number':6,'piece_id':'piece6'},{'number':7,'piece_id':'piece7'},{'number':8,'piece_id':'piece8'},{'number':9,'piece_id':'piece9'}]}]
    describe('when rendering the component', function () {
      let shallowRendererOutput = {}

      before(function() {
        shallowRenderer.render(<BookListItem BookList={validBooList} getAll={sandbox.stub()}/>)
        shallowRendererOutput = shallowRenderer.getRenderOutput()
      })

      it('should wrap all HTML in a Div with the class "container"', function () {
         console.log(`output = ${JSON.stringify(shallowRendererOutput)}`)
        shallowRendererOutput.type.should.equal('fargle')
      })
    })
  })
})
