from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
import unittest, time, re, os

class VerifyCanSaveQuery(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.PhantomJS()
        self.driver.implicitly_wait(30)
        self.base_url = os.environ['TEST_BASE_URL']
	if 'http://' not in self.base_url:
		self.base_url = 'http://' + self.base_url
        if self.base_url[-1] != '/':
            self.base_url += '/'
        self.verificationErrors = []
        self.accept_next_alert = True

    def test_verify_can_save_query(self):
        driver = self.driver
        driver.set_window_size(1440, 900)
        driver.get(self.base_url + "login/")
        driver.find_element_by_id("id_username").clear()
        driver.find_element_by_id("id_username").send_keys("user002")
        driver.find_element_by_id("id_password").clear()
        driver.find_element_by_id("id_password").send_keys("test")
        driver.find_element_by_css_selector("button.btn-info.btn").click()
        for i in range(60):
            try:
                if self.is_element_present(By.CSS_SELECTOR, "div.heading"): break
            except: pass
            time.sleep(1)
        else: self.fail("time out")
        driver.find_element_by_link_text("Results").click()
        for i in range(60):
            try:
                if self.is_element_present(By.CSS_SELECTOR, "table.table-striped"): break
            except: pass
            time.sleep(1)
            print 'waitng ...' , i
        else: self.fail("time out")
        driver.find_element_by_xpath("//div[@id='content']/div[8]/div/div/div/button[3]").click()
        driver.find_element_by_css_selector("input.query-description.span12").clear()
        driver.find_element_by_css_selector("input.query-description.span12").send_keys("New Query")
        driver.find_element_by_xpath("//div[@id='content']/div[5]/div[3]/button[2]").click()
        for i in range(60):
            try:
                if self.is_element_present(By.CSS_SELECTOR, "div.alert"): break
            except: pass
            time.sleep(1)
        else: self.fail("time out")
        driver.find_element_by_link_text("Workspace").click()
        for i in range(60):
            try:
                if self.is_element_present(By.CSS_SELECTOR, "div.query-item"): break
            except: pass
            time.sleep(1)
        else: self.fail("time out")
        driver.find_element_by_link_text("Show details").click()
        try: self.assertEqual("New Query", driver.find_element_by_css_selector("span.muted").text)
        except AssertionError as e: self.verificationErrors.append(str(e))
        driver.find_element_by_link_text("Hide details").click()
        driver.find_element_by_link_text("user002").click()
        driver.find_element_by_link_text("Logout").click()

    def is_element_present(self, how, what):
        try: self.driver.find_element(by=how, value=what)
        except NoSuchElementException, e: return False
        return True

    def is_alert_present(self):
        try: self.driver.switch_to_alert()
        except NoAlertPresentException, e: return False
        return True

    def close_alert_and_get_its_text(self):
        try:
            alert = self.driver.switch_to_alert()
            alert_text = alert.text
            if self.accept_next_alert:
                alert.accept()
            else:
                alert.dismiss()
            return alert_text
        finally: self.accept_next_alert = True

    def tearDown(self):
        self.driver.quit()
        self.assertEqual([], self.verificationErrors)

if __name__ == "__main__":
    unittest.main()
