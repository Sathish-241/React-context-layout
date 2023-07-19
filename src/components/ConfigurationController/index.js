// Write your code here
// import {Component} from 'react'
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        onToggleShowContent,
      } = value

      const onChangeShowContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="controller-container">
          <h1 className="controller-heading">Layout</h1>
          <input
            type="checkbox"
            checked={showContent}
            className="checkbox"
            id="content"
            onChange={onChangeShowContent}
          />
          <label htmlFor="content" className="label">
            Content
          </label>
          <br />
          <input
            type="checkbox"
            checked={showLeftNavbar}
            className="checkbox"
            id="leftNavbar"
            onChange={onChangeLeftNavbar}
          />
          <label htmlFor="leftNavbar" className="label">
            Left Navbar
          </label>
          <br />
          <input
            type="checkbox"
            checked={showRightNavbar}
            className="checkbox"
            id="rightNavbar"
            onChange={onChangeRightNavbar}
          />
          <label htmlFor="rightNavbar" className="label">
            Right Navbar
          </label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
