package com.ssafy.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.CourseCreateReq;
import com.ssafy.api.request.CourseUpdateReq;
import com.ssafy.api.response.CreateCourseRes;
import com.ssafy.api.service.CourseService;
import com.ssafy.common.model.response.BaseResponseBody;

@RestController
@RequestMapping("course")
public class CourseController {
	
	@Autowired
	CourseService courseService;
	
	// 시간표 생성
	@PostMapping("/create")
	public ResponseEntity<CreateCourseRes> createCourse(@RequestBody CourseCreateReq courseReq) {
		Long courseId = courseService.createCourse(courseReq);
		return ResponseEntity.status(200).body(CreateCourseRes.of(200, "Success", courseId));
	}
	
	// 시간표 조회
	@GetMapping
	public void getCourse() {
		
	}
	
	// 시간표 삭제
	@DeleteMapping("/delete/{courseId}")
	public ResponseEntity<BaseResponseBody> deleteCourse(@PathVariable("courseId") Long courseId) {
		courseService.deleteCourse(courseId);
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "삭제되었습니다."));
	}
	
	// 시간표 수정
	@PutMapping("/update")
	public ResponseEntity<BaseResponseBody> updateCourse(@RequestBody CourseUpdateReq courseUpdateReq) {
		boolean res = courseService.updateCourse(courseUpdateReq);
		if(!res)
			return ResponseEntity.status(400).body(BaseResponseBody.of(400, "수정 중 문제가 발생했습니다."));
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "수정되었습니다."));
	}
}
