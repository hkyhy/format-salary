const formatSalary = (salary_begin, salary_end, salaryType, salaryMonth, locale = 'zh-CN') => {
  const isCN = locale === 'zh-CN';
  if (salaryType === 1) {
    return isCN ? '面议' : "Negotiable"
  }
  if (salary_begin == 0 && salary_end > 0) {
    return isCN ? `${salary_end}K以内` : `Within ${salary_end}K`;
  } else if (salary_begin > 0 && salary_end > salary_begin) {
    if(salaryMonth>12){
      return `${salary_begin}-${salary_end}K*${salaryMonth}${isCN ? '薪' : 'Salary'}`;
    }
    return `${salary_begin}-${salary_end}K`
  } else if (salary_begin > 0 && salary_end === salary_begin) {
    return `${salary_begin}K`;
  } else if (salary_begin > 0) {
    return isCN ? `${salary_begin}K以上` : `Over ${salary_begin}K`;
  } else {
    return false;
  }
};

module.exports = formatSalary;